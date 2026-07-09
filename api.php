<?php
header('Content-Type: application/json; charset=utf-8');

// Empêcher la mise en cache pour le développement
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

$dataDir = __DIR__ . '/data/';
$languages = ['c', 'cpp', 'csharp', 'java', 'javascript', 'php', 'python', 'typescript', 'vb', 'vba'];

try {
    // 1. Lire les métadonnées (qui définissent les concepts existants)
    $metadataPath = $dataDir . 'metadata.json';
    if (!file_exists($metadataPath)) {
        throw new Exception("Le fichier metadata.json est introuvable.");
    }
    
    $metadataContent = file_get_contents($metadataPath);
    $metadata = json_decode($metadataContent, true);
    
    if (!is_array($metadata)) {
        throw new Exception("Le fichier metadata.json n'est pas un JSON valide.");
    }

    // 2. Lire les données pour chaque langage
    $langData = [];
    foreach ($languages as $lang) {
        $langPath = $dataDir . $lang . '.json';
        if (file_exists($langPath)) {
            $raw = file_get_contents($langPath);
            $parsed = json_decode($raw, true);
            $langData[$lang] = is_array($parsed) ? $parsed : [];
        } else {
            $langData[$lang] = [];
        }
    }

    // 3. Fusionner (construire la structure finale attendue par l'application)
    $unifiedData = [];
    
    foreach ($metadata as $concept) {
        $conceptId = $concept['id'];
        $conceptLanguages = [];
        
        foreach ($languages as $lang) {
            $conceptLanguages[$lang] = isset($langData[$lang][$conceptId]) ? $langData[$lang][$conceptId] : new stdClass(); // stdClass pour forcer un objet vide {} en JSON
        }
        
        $concept['languages'] = $conceptLanguages;
        $unifiedData[] = $concept;
    }

    // 4. Retourner le JSON final
    echo json_encode($unifiedData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => true,
        'message' => $e->getMessage()
    ]);
}
?>
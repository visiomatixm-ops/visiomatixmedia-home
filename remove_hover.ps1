$root = "c:\Users\Sahil\Downloads\VisiomatixMedia\src\components\Services"
$files = Get-ChildItem -Path $root -Recurse -Filter "*.jsx" | Where-Object {
    (Get-Content $_.FullName -Raw) -match "whileHover"
}

Write-Host "Files to process: $($files.Count)"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8

    # --- Multi-line whileHover blocks ---
    # Pattern: whileHover={{ \n  ...props... \n  }}  (any number of lines inside)
    $content = $content -replace '(?s)\s*whileHover=\{\{[^}]*(\{[^}]*\}[^}]*)?\}\}', ''

    Set-Content $file.FullName $content -Encoding UTF8 -NoNewline
    Write-Host "Processed: $($file.Name)"
}

Write-Host "Done - $($files.Count) files processed"

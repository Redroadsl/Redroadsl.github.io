<?php

function Crowl($directory)
{
	$currentDirectory = opendir($directory);

	for(;;){
		$fileName = readdir($currentDirectory);
		$filePath = $directory . "/" . $fileName;

		if($fileName === false) break;

		if(!is_file($filePath)){
			// ディレクトリ
			if(($fileName != ".") && ($fileName != "..") && ($fileName != ".svn")) Crowl($filePath);
			continue;
		}
		if($fileName == basename($_SERVER["PHP_SELF"])) continue;

		// 先頭の ./ は削る
		echo substr($filePath,2) . "," . sha1_file($filePath) . "\n";
	}
}
Crowl(".");

?>

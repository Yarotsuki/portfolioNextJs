import { IconDownload } from "@tabler/icons-react";

export default function Cv(){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <h1 className="text-3xl font-bold mb-4">Mon CV</h1>
    <p className="text-gray-600 mb-6">Cliquez sur le bouton ci-dessous pour télécharger mon CV.</p>
    <a
      href="/cv/CV_Corbel.pdf"
      download
      className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
    >
      <IconDownload className="w-6 h-6" />
      Télécharger mon CV
    </a>
  </div>
  )
}
import glob from "fast-glob";
import * as path from "path";

async function importBlog(blogFileName: string) {
  try {
    // Utiliser le chemin relatif correct pour l'importation
    const { meta, default: component } = await import(
      `@/app/blog/${blogFileName.replace(/\.mdx$/, '')}`
    );
    
    return {
      slug: blogFileName.replace(/\.mdx$/, ""),
      ...meta,
      component,
    };
  } catch (error) {
    console.error(`Erreur lors de l'importation du blog ${blogFileName}:`, error);
    return null;
  }
}

export async function getAllBlogs() {
  try {
    // Obtenir les fichiers MDX dans le dossier blog
    const blogFileNames = await glob(["**/*.mdx"], {
      cwd: path.join(process.cwd(), "src/app/blog"),
    });

    // Importer tous les blogs et filtrer les imports qui ont échoué
    const blogs = (await Promise.all(blogFileNames.map(importBlog)))
      .filter((blog): blog is NonNullable<typeof blog> => blog !== null);

    // Trier par date décroissante
    return blogs.sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des blogs:", error);
    return [];
  }
}

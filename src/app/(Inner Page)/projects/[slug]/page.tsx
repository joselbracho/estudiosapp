import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import ErrorSection from "@/components/error/ErrorSection";
import InnerLayout from "@/components/layout/InnerLayout";
import ProjectDetailSection from "@/components/portfolio/ProjectDetailSection";
import { projectData } from "@/data/Data";
import { Metadata } from "next";

export function generateStaticParams() {
  return projectData.map((project) => ({
    slug: project.slug,
  }));
}

export const metadata: Metadata = {
  title: "eStudioapp - Project Details Page",
  description: "Professional Developers",
};
export default function Home({ params }: { params: { slug: string } }) {
  const projectInfo = projectData.find((item) => item.slug === params.slug);
  return (
    <main className="rv-14-body">
      <InnerLayout>
        {projectInfo ? (
          <>
            <BreadcrumbSection title="Project Details" />
            <ProjectDetailSection
              title={projectInfo.title}
              id={projectInfo.id}
            />
          </>
        ) : (
          <ErrorSection />
        )}
      </InnerLayout>
    </main>
  );
}

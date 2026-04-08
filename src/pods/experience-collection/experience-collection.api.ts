import client from "@lib/client.ts";
import type { ExperienceSection } from "./experience-collection.model";

export /**
 * funcion que obtiene la sección de experiencia
 *
 * @return {*}  {Promise<ExperienceSection>}
 */
const getExperienceSection = async (): Promise<ExperienceSection> => {
  const experienceSection = await client.getContent<ExperienceSection>({
    contentType: "ExperienceSection",
    includeRelatedContent: true,
  });
  return experienceSection;
};

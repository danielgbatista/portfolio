import { ProjectResponse } from "src/services/responses/project-response";

export interface ProjectModalProps {
    project: ProjectResponse,
    onClose: () => void,
}
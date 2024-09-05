import { ProjectResponse } from "src/services/responses/project-response";

export interface ProjectModalProps {
    data: ProjectResponse,
    onClose: () => void,
    isOpen: boolean,
}
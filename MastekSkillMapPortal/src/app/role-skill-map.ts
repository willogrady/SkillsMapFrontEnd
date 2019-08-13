import { RoleGroup } from './role-group';

export interface RoleSkillMap {
    role_id: number;
    role_title: string;
    role_grade: string;
    version_id: number;
    role_summary: string;
    role_group_id: number;
    role_group: RoleGroup;
    Skills: String[];
}
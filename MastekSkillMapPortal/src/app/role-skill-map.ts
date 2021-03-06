import { Role } from './role';
import { SfiaSkill } from './sfia-skill';

export interface RoleSkillMap extends SfiaSkill{
    role_skill_map_id: number;
    role_id: number;
    role_title: string;
    skillcode: string;
    level: number;
    version_id: number;
    roleGroup: Role;
    role: Role;
}
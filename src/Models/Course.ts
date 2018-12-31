import Entity from "./Entity";
import Teacher from "./Teacher";

export default interface Course extends Entity {
    name: string;
    Description?: string;
}
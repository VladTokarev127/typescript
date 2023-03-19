class User {
	skills: string[];

	addSkill(addedSkill: string): void;
	addSkill(addedSkills: string[]): void;
	addSkill(addedSkills: string[] | string): void {
		if (typeof addedSkills === 'string') {
			this.skills.push(addedSkills);
		} else {
			this.skills.concat(addedSkills);
		}
	};
}

// new User().addSkill()

function run(distance: string): string;
function run(distance: number): number;
function run(distance: number | string): number | string {
	if (typeof distance === 'number') {
		return distance;
	} else {
		return distance;
	}
};

// run();
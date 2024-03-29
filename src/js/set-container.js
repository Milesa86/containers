export default class Team {
    constructor() {
        this.members = new Set();
    }
    add(character) {
        if (this.members.has(character)) {
            throw new Error('Такой игрок уже есть в команде')
        }
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach((character) => {
            this.members.add(character);
        })
    }

    toArray() {
        this.members = Array.from(this.members)
    }
}

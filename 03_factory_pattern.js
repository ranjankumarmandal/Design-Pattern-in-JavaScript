function memberFactory() {
    this.createMember = function(name, type) {
        let member;

        if(type === 'simple') {
            memeber = new SimpleMemberShip(name);
        } else if(type === 'standard') {
            member = new StandardMemberShip(name);
        } else if(type === 'super') {
            member = new SuperMemberShip(name);
        }

        member.type = type;

        member.define = function() {
            console.log(`${this.name} ${this.type}: ${this.cost}`);
        }

        return member;
    }
}

const SimpleMemberShip = function(name) {
    this.name = name;
    this.cost = '$5';
}

const StandardMemberShip = function(name) {
    this.name = name;
    this.cost = '$15';
}

const SuperMemberShip = function(name) {
    this.name = name;
    this.cost = '$25';
}

const members = [];
const factory = new memberFactory();

members.push(factory.createMember('ranjan kumar mandal', 'simple'));
members.push(factory.createMember('satya kumar mandal', 'super'));
members.push(factory.createMember('sunder kumar mandal', 'standard'));

members.forEach((member) => {
    member.define();
})


interface MemberCard {
    firstname: string;
    lastname: string;
    email: string;
    studentId: string;
}

interface Member {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    studentId: string;
    role: string;
    type: string;
    confirmed: boolean;
    education: {
        studentId: string;
    }
}

interface MembersResponse {
    members: Member[];
}

export type { MembersResponse, MemberCard, Member };
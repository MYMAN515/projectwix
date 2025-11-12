export type TeamRole =
  | 'teamLead'
  | 'programmer'
  | 'presenter'
  | 'secretary'
  | 'designer'
  | 'videographer'
  | 'photographer'
  | 'visualConcept'

export type TeamBadge = 'programmer'

export interface TeamMember {
  name: string
  roles: TeamRole[]
  highlight?: boolean
  badge?: TeamBadge
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Qais Al Hrahsheh',
    roles: ['teamLead', 'programmer'],
    highlight: true,
    badge: 'programmer',
  },
  {
    name: 'Tan Kang Zheng',
    roles: ['programmer', 'presenter'],
  },
  {
    name: 'Chengyang Sun',
    roles: ['secretary'],
  },
  {
    name: 'Raja Nur Aqylah Natasha binti Raja Zazman Shah',
    roles: ['designer'],
  },
  {
    name: 'Hanif Ruben Davni Setiadji',
    roles: ['videographer', 'photographer'],
  },
  {
    name: 'Rafia Raida Binta Jashim',
    roles: ['secretary'],
  },
  {
    name: 'Wong Yan Wen',
    roles: ['visualConcept', 'presenter'],
  },
]

export const leadMember = teamMembers[0]
export const supportingMembers = teamMembers.slice(1)

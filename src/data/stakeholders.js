import cdo from "../assets/cdo.jpeg";
import collector from "../assets/collector.jpeg";
import doctor from "../assets/doctor.jpeg";
import daptasanjeeb from "../assets/daptaSanjeeb.jpg";
import daptabalram from "../assets/daptaBalram.jpg";
import autism1 from "../assets/autism1.jpg";
import parent from "../assets/parents.jpg";
import ritumam from "../assets/ritumam.jpg";
import psy from "../assets/psychiatrist.jpg";

export const stakeholders = [
  {
    id: 'overview',
    title: 'Psychology Professionals',
    profiles: [
      {
        location: 'Professional Perspective',
        heading: 'Guru Prasad Bag - Clinical Psychologist',
        description:
          'The proposed Lumina platform addresses two important and often overlooked dimensions of autism support. First, it recognises the emotional burden and burnout that caregivers may experience. In many situations, attention remains primarily focused on the child, while the psychological well-being of parents and caregivers receives comparatively less attention. By proposing easier access to professionals, peer support, and reliable information, Lumina has the potential to strengthen support systems for caregivers as well.\n\nSecond, the initiative proposes reducing financial and geographic barriers to accessing autism-related support. If implemented effectively, providing free access to reliable resources and connecting families with appropriate professionals could be particularly meaningful for underserved communities. From a societal perspective, Lumina represents a promising concept that seeks to move autism support beyond the individual child and toward a more inclusive ecosystem involving families, professionals, and communities.',
        images: [psy],
      },
      {
        location: 'Professional Perspective',
        heading: 'Rituparna Mitra, Research Scholar in Psychology',
        description:
          'Lumina presents a promising concept for making autism-related information, guidance, and support services more accessible to caregivers. One of the major challenges faced by families can be identifying the appropriate professional, service, or source of information at the right time. By proposing an integrated platform that brings these resources together, Lumina could potentially reduce some of the difficulties associated with navigating fragmented support systems.\n\nIf developed and implemented responsibly, the platform may also contribute to greater awareness, caregiver empowerment, and social inclusion of children with Autism Spectrum Disorder. Its potential societal impact lies not only in connecting families with services, but also in encouraging communities to understand autism and move toward greater acceptance and inclusion.',
        images: [ritumam],
      },
    ],
  },

  {
    id: 'parent',
    title: 'Parents',
    location: 'Parent Perspective',
    heading: 'Mr. Rajat Mishra',
    description:
      'For many families, navigating autism support can involve searching for reliable information, identifying appropriate professionals, and finding communities that understand their experiences. Lumina proposes bringing these forms of support together in one accessible platform.\n\nFrom a parent’s perspective, such an ecosystem could potentially reduce feelings of isolation and make it easier to discover resources, connect with other caregivers, and participate in inclusive community activities. If successfully implemented, Lumina could contribute to a future where families feel better informed, more connected, and less alone while navigating their child’s developmental journey.',
    observations: [
      'Potential Need: Accessible therapy information and caregiver support',
      'Potential Impact: Greater connection between families and local communities',
    ],
    images: [parent],
  },

  {
    id: 'collector',
    title: 'District Collector - Kalahandi',
    location: 'Government Perspective',
    heading: 'Potential Perspective on Lumina:',
    description:
      'Lumina proposes a community-oriented approach to autism support by attempting to connect families with information, professionals, and inclusive community resources through a single platform. From a public-service perspective, such a model could potentially help address geographic, financial, and informational barriers faced by families in underserved areas.\n\nIf implemented at scale and supported through appropriate institutional partnerships, the concept could contribute to stronger community-level autism awareness and inclusion while complementing existing government and healthcare services.',
    observations: [
      'Potentially improves access to autism-related information and services',
      'Could help address geographic and financial barriers',
      'Could strengthen community-level awareness and inclusion',
    ],
    images: [collector],
  },

  {
    id: 'cdo',
    title: 'Chief Development Officer, Zilla Parishad - Kalahandi',
    location: 'Development Perspective',
    heading: 'Potential Perspective on Lumina:',
    description:
      'Project Lumina proposes a digital and community-based approach to addressing gaps in autism support infrastructure. By connecting families with professionals, educational resources, and community networks, the platform could potentially complement existing social and healthcare systems.\n\nIts broader societal potential lies in making autism support more accessible at the family and community level. With appropriate partnerships, responsible implementation, and long-term sustainability, Lumina could contribute to a more inclusive support ecosystem for underserved communities.',
    observations: [
      'Could help bridge gaps in local support infrastructure',
      'Could improve access to resources at the family level',
      'Could support long-term community inclusion',
    ],
    images: [cdo],
  },

  {
    id: 'ngo',
    title: 'NGO Partner',
    location: 'DAPTA Perspective',
    heading: 'Potential Perspective from an NGO Partner:',
    description:
      'Lumina proposes combining digital access to autism resources with community-based inclusion initiatives. This approach could potentially address not only the lack of accessible support but also the social isolation and discrimination that some autistic children and their families may experience.\n\nThe proposed Lumina Clubs and community activities could create opportunities for autistic and neurotypical children, parents, volunteers, and community members to interact in inclusive environments. If implemented sustainably through partnerships with NGOs, CSR organisations, and local institutions, the concept could contribute to a broader shift from awareness toward meaningful social acceptance.',
    observations: [
      'Could address social isolation and barriers to inclusion',
      'Could encourage interaction between autistic and neurotypical communities',
      'Could create opportunities for NGO and CSR-supported community programs',
    ],
    images: [daptasanjeeb, daptabalram],
  },
];
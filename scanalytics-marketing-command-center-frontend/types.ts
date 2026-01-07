
export interface SegmentData {
  id: string;
  name: string;
  oneLiner: string;
  icon: string;
  description: string;
  icp: {
    firmographics: string;
    primaryBuyer: string;
    keyInfluencer: string;
  };
  problems: string[];
  outcomes: string[];
  approvedMessages: string[];
  objections: {
    question: string;
    response: string;
  }[];
  contentAngles: string[];
  proofStatus: {
    label: string;
    status: 'success' | 'warning' | 'error';
  }[];
}

export type SegmentType = 'physical-therapy' | 'senior-living' | 'facilities' | 'healthcare' | 'sports';

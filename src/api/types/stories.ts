import type { ApiPrivacySettings } from '../../types';
import type {
  ApiGeoPoint, ApiReaction, ApiReactionCount, MediaContent,
} from './messages';
import type { StatisticsOverviewPercentage } from './statistics';

export interface ApiStory {
  '@type'?: 'story';
  id: number;
  peerId: string;
  date: number;
  expireDate: number;
  content: MediaContent;
  isPinned?: boolean;
  isEdited?: boolean;
  isForCloseFriends?: boolean;
  isForContacts?: boolean;
  isForSelectedContacts?: boolean;
  isPublic?: boolean;
  isOut?: true;
  noForwards?: boolean;
  viewsCount?: number;
  reactionsCount?: number;
  reactions?: ApiReactionCount[];
  recentViewerIds?: string[];
  visibility?: ApiPrivacySettings;
  sentReaction?: ApiReaction;
  mediaAreas?: ApiMediaArea[];
}

export interface ApiStorySkipped {
  '@type'?: 'storySkipped';
  id: number;
  peerId: string;
  isForCloseFriends?: boolean;
  date: number;
  expireDate: number;
}

export interface ApiStoryDeleted {
  '@type'?: 'storyDeleted';
  id: number;
  peerId: string;
  isDeleted: true;
}

export type ApiTypeStory = ApiStory | ApiStorySkipped | ApiStoryDeleted;

export type ApiPeerStories = {
  byId: Record<number, ApiTypeStory>;
  orderedIds: number[]; // Actual peer stories
  pinnedIds: number[]; // Profile Shared Media: Pinned Stories tab
  archiveIds?: number[]; // Profile Shared Media: Archive Stories tab
  lastUpdatedAt?: number;
  lastReadId?: number;
};

export type ApiMessageStoryData = {
  id: number;
  peerId: string;
  isMention?: boolean;
};

export type ApiWebPageStoryData = {
  id: number;
  peerId: string;
};

export type ApiStoryView = {
  userId: string;
  date: number;
  reaction?: ApiReaction;
  isUserBlocked?: true;
  areStoriesBlocked?: true;
};

export type ApiStealthMode = {
  activeUntil?: number;
  cooldownUntil?: number;
};

export type ApiMediaAreaCoordinates = {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
};

export type ApiMediaAreaVenue = {
  type: 'venue';
  coordinates: ApiMediaAreaCoordinates;
  geo: ApiGeoPoint;
  title: string;
};

export type ApiMediaAreaGeoPoint = {
  type: 'geoPoint';
  coordinates: ApiMediaAreaCoordinates;
  geo: ApiGeoPoint;
};

export type ApiMediaAreaSuggestedReaction = {
  type: 'suggestedReaction';
  coordinates: ApiMediaAreaCoordinates;
  reaction: ApiReaction;
  isDark?: boolean;
  isFlipped?: boolean;
};

export type ApiMediaArea = ApiMediaAreaVenue | ApiMediaAreaGeoPoint | ApiMediaAreaSuggestedReaction;

export type ApiBoostsStatus = {
  level: number;
  currentLevelBoosts: number;
  boosts: number;
  nextLevelBoosts?: number;
  hasMyBoost?: boolean;
  boostUrl: string;
  premiumSubscribers?: StatisticsOverviewPercentage;
};

export type ApiMyBoost = {
  slot: number;
  chatId?: string;
  date: number;
  expires: number;
  cooldownUntil?: number;
};

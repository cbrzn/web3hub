/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ApiData {
  id: number;
  name: string;
  subtext: string;
  description: string;
  icon: string;
  locationUri: string;
  pointerUris: string[];
  ownerId?: string;
}
export interface UserData {
  id: number;
  username?: string;
  address?: string;
  accessToken?: string;
  addressType?: number;
  githubId?: string;
}
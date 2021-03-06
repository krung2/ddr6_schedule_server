export interface ISeasonal {
  username: string;
  platform: string;
  ubisoft_id: string;
  uplay_id: string;
  avatar_url_146: string;
  avatar_url_256: string;
  last_updated: string;
  seasons: Seasons;
}
export interface Seasons {
  crimson_heist: CrimsonHeist;
  neon_dawn: NeonDawnOrShadowLegacyOrSteelWaveOrVoidEdgeOrShiftingTidesOrEmberRiseOrPhantomSightOrBurntHorizonOrWindBastionOrGrimSkyOrParaBellumOrChimeraOrWhiteNoiseOrBloodOrchidOrHealth;
  shadow_legacy: NeonDawnOrShadowLegacyOrSteelWaveOrVoidEdgeOrShiftingTidesOrEmberRiseOrPhantomSightOrBurntHorizonOrWindBastionOrGrimSkyOrParaBellumOrChimeraOrWhiteNoiseOrBloodOrchidOrHealth;
  steel_wave: NeonDawnOrShadowLegacyOrSteelWaveOrVoidEdgeOrShiftingTidesOrEmberRiseOrPhantomSightOrBurntHorizonOrWindBastionOrGrimSkyOrParaBellumOrChimeraOrWhiteNoiseOrBloodOrchidOrHealth;
  void_edge: NeonDawnOrShadowLegacyOrSteelWaveOrVoidEdgeOrShiftingTidesOrEmberRiseOrPhantomSightOrBurntHorizonOrWindBastionOrGrimSkyOrParaBellumOrChimeraOrWhiteNoiseOrBloodOrchidOrHealth;
  shifting_tides: NeonDawnOrShadowLegacyOrSteelWaveOrVoidEdgeOrShiftingTidesOrEmberRiseOrPhantomSightOrBurntHorizonOrWindBastionOrGrimSkyOrParaBellumOrChimeraOrWhiteNoiseOrBloodOrchidOrHealth;
  ember_rise: NeonDawnOrShadowLegacyOrSteelWaveOrVoidEdgeOrShiftingTidesOrEmberRiseOrPhantomSightOrBurntHorizonOrWindBastionOrGrimSkyOrParaBellumOrChimeraOrWhiteNoiseOrBloodOrchidOrHealth;
  phantom_sight: NeonDawnOrShadowLegacyOrSteelWaveOrVoidEdgeOrShiftingTidesOrEmberRiseOrPhantomSightOrBurntHorizonOrWindBastionOrGrimSkyOrParaBellumOrChimeraOrWhiteNoiseOrBloodOrchidOrHealth;
  burnt_horizon: NeonDawnOrShadowLegacyOrSteelWaveOrVoidEdgeOrShiftingTidesOrEmberRiseOrPhantomSightOrBurntHorizonOrWindBastionOrGrimSkyOrParaBellumOrChimeraOrWhiteNoiseOrBloodOrchidOrHealth;
  wind_bastion: NeonDawnOrShadowLegacyOrSteelWaveOrVoidEdgeOrShiftingTidesOrEmberRiseOrPhantomSightOrBurntHorizonOrWindBastionOrGrimSkyOrParaBellumOrChimeraOrWhiteNoiseOrBloodOrchidOrHealth;
  grim_sky: NeonDawnOrShadowLegacyOrSteelWaveOrVoidEdgeOrShiftingTidesOrEmberRiseOrPhantomSightOrBurntHorizonOrWindBastionOrGrimSkyOrParaBellumOrChimeraOrWhiteNoiseOrBloodOrchidOrHealth;
  para_bellum: NeonDawnOrShadowLegacyOrSteelWaveOrVoidEdgeOrShiftingTidesOrEmberRiseOrPhantomSightOrBurntHorizonOrWindBastionOrGrimSkyOrParaBellumOrChimeraOrWhiteNoiseOrBloodOrchidOrHealth;
  chimera: NeonDawnOrShadowLegacyOrSteelWaveOrVoidEdgeOrShiftingTidesOrEmberRiseOrPhantomSightOrBurntHorizonOrWindBastionOrGrimSkyOrParaBellumOrChimeraOrWhiteNoiseOrBloodOrchidOrHealth;
  white_noise: NeonDawnOrShadowLegacyOrSteelWaveOrVoidEdgeOrShiftingTidesOrEmberRiseOrPhantomSightOrBurntHorizonOrWindBastionOrGrimSkyOrParaBellumOrChimeraOrWhiteNoiseOrBloodOrchidOrHealth;
  blood_orchid: NeonDawnOrShadowLegacyOrSteelWaveOrVoidEdgeOrShiftingTidesOrEmberRiseOrPhantomSightOrBurntHorizonOrWindBastionOrGrimSkyOrParaBellumOrChimeraOrWhiteNoiseOrBloodOrchidOrHealth;
  health: NeonDawnOrShadowLegacyOrSteelWaveOrVoidEdgeOrShiftingTidesOrEmberRiseOrPhantomSightOrBurntHorizonOrWindBastionOrGrimSkyOrParaBellumOrChimeraOrWhiteNoiseOrBloodOrchidOrHealth;
}
export interface CrimsonHeist {
  name: string;
  start_date: string;
  end_date?: null;
  regions: Regions;
}
export interface Regions {
  ncsa: (NcsaEntityOrEmeaEntityOrApacEntity)[];
  emea: (NcsaEntityOrEmeaEntityOrApacEntity)[];
  apac: (NcsaEntityOrEmeaEntityOrApacEntity)[];
}
export interface NcsaEntityOrEmeaEntityOrApacEntity {
  season_id: number;
  region: string;
  abandons: number;
  losses: number;
  max_mmr: number;
  max_rank: number;
  mmr: number;
  next_rank_mmr: number;
  prev_rank_mmr: number;
  rank: number;
  skill_mean: number;
  skill_standard_deviation: number;
  created_for_date: string;
  wins: number;
  kills: number;
  deaths: number;
  last_match_mmr_change: number;
  last_match_skill_mean_change: string;
  last_match_skill_standard_deviation_change: string;
  last_match_result: number;
  champions_rank_position: number;
  rank_text: string;
  rank_image: string;
  max_rank_text: string;
  max_rank_image: string;
}
export interface NeonDawnOrShadowLegacyOrSteelWaveOrVoidEdgeOrShiftingTidesOrEmberRiseOrPhantomSightOrBurntHorizonOrWindBastionOrGrimSkyOrParaBellumOrChimeraOrWhiteNoiseOrBloodOrchidOrHealth {
  name: string;
  start_date: string;
  end_date: string;
  regions: Regions;
}

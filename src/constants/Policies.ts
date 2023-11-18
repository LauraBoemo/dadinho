export const enum PolicyActions {
  BUILDINGS_WRITE = "buildings_write",
  ACCOUNTS_READ = "accounts_read",

  // AUTOSCAN FEATURE GATING
  AUTOSCAN = "AutoScan",

  // CALVIN FEATURE GATING
  CALVIN = "Calvin",

  // MAGIC BUTTON FEATURE GATING
  MAGIC_BUTTON = "Magic Button",

  // SGT FEATURE GATING
  SGT = "SGT",
  SGT_UNIT_SPACES = "SGT_Unit_Spaces",
  SGT_ACCESS_DEVICES = "SGT_Access_Devices",
  SGT_SCHEDULE = "SGT_Schedule",

  // ANALYTICS FEATURE GATING
  ANALYTICS = "Analytics",
  ANALYTICS_MOST_VIEWED = "Analytics_Most_Viewed",
  ANALYTICS_LEAST_VIEWED = "Analytics_Last_Viewed",
  ANALYTICS_SPACES_VIEW = "Analytics_View",
  ANALYTICS_SPACES_VIEW_BY_SOURCE = "Analytics_Spaces_View_By_Source",
  ANALYTICS_SPACES_VIEW_BY_REFERRAL = "Analytics_Spaces_View_By_Referral",
  ANALYTICS_COMMUNITY_TABLE = "Analytics_Community_Table",

  // PROSPECT INTELLIGENCE FEATURE GATING
  PROSPECT_INTELLIGENCE = "Prospect Intelligence",
  PROSPECT_INTELLIGENCE_ACTIVITY_DETAILS = "Prospect_Intelligence_Activity_Details",
  PROSPECT_INTELLIGENCE_MOST_ENGAGED = "Prospect_Intelligence_Most_Engaged",
  PROSPECT_INTELLIGENCE_RECENT_ACTIVITY = "Prospect_Intelligence_Recent_Activity",
  PROSPECT_INTELLIGENCE_APPOINTMENTS = "Prospect_Intelligence_Appointments",
  PROSPECT_INTELLIGENCE_NEW_PROSPECTS = "Prospect_Intelligence_New_Prospects",
}

export const PolicyGroups = {
  SGT: [PolicyActions.SGT_UNIT_SPACES, PolicyActions.SGT_ACCESS_DEVICES, PolicyActions.SGT_SCHEDULE],
  ANALYTICS: [
    PolicyActions.ANALYTICS_MOST_VIEWED,
    PolicyActions.ANALYTICS_LEAST_VIEWED,
    PolicyActions.ANALYTICS_SPACES_VIEW,
    PolicyActions.ANALYTICS_SPACES_VIEW_BY_SOURCE,
    PolicyActions.ANALYTICS_SPACES_VIEW_BY_REFERRAL,
    PolicyActions.ANALYTICS_COMMUNITY_TABLE,
  ],
  PROSPECT_INTELLIGENCE: [
    PolicyActions.PROSPECT_INTELLIGENCE_ACTIVITY_DETAILS,
    PolicyActions.PROSPECT_INTELLIGENCE_MOST_ENGAGED,
    PolicyActions.PROSPECT_INTELLIGENCE_RECENT_ACTIVITY,
    PolicyActions.PROSPECT_INTELLIGENCE_APPOINTMENTS,
    PolicyActions.PROSPECT_INTELLIGENCE_NEW_PROSPECTS,
  ],
};

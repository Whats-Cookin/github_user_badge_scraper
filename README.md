## Github User Badge Scraper

Github Oauth don't send the achievements with user data. This script scrapes the github public profile to get achievements.

```
import { getGithubUserAchievements } from "github_user_badge_scraper";
const achievements = await getGithubUserAchievements("link_to_public_github_profile");

// example: {
    'Pair Extraordinaire': 2,
    Quickdraw: 1,
    'Pull Shark': 3,
    YOLO: 1,
    'Arctic Code Vault Contributor': 1,
}
```

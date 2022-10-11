import { __awaiter, __generator } from "tslib";
import { load } from 'cheerio';
import axios from 'axios';
export function getGithubUserAchievements(githubUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var achievements, response, $, achievementsElements;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    achievements = {};
                    return [4, axios.get(githubUrl)];
                case 1:
                    response = _a.sent();
                    $ = load(response.data);
                    achievementsElements = $('h2 a')
                        .first()
                        .parent()
                        .parent()
                        .find('a img');
                    achievementsElements.each(function () {
                        var alt = $(this).attr()['alt'];
                        var prefix = 'Achievement: ';
                        if (alt.startsWith(prefix)) {
                            var achievement = alt.slice(prefix.length);
                            var freqAsString = $(this).parent().find('span').text();
                            var freq = freqAsString ? Number(freqAsString.slice(1)) : 1;
                            achievements[achievement] = freq;
                        }
                    });
                    return [2, achievements];
            }
        });
    });
}

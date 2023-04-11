const today = new Date();
const thirtyDaysAgo = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 30
);
const startDay = thirtyDaysAgo.toISOString().slice(0, 10);

console.log(startDay);

let accessToken =
  "EAALOFT4pBK8BANTHE6ZCwShlVAdV8irZC2H6S2zxoa6e8st2eegVuiZCOGOtu4Kl3Qdou1FRwHRopF2ZBWl5gfmzzwZBfxG4tXk9V7SJV27uuZAK12tH1CDr75FXsZCamZA8mZArgNLqPJeUmnK4X9F0re3w5c4209TCvKQYUGh7HmVJVnkzXDIqW";

let pageId = "101391088736243";
let url = `https://graph.facebook.com/v16.0/${pageId}/insights/page_fans/day?since=${startDay}&access_token=${accessToken}`;

import rp from "request-promise";

Meteor.methods({
  async getPageFansData() {
    const options = {
      url: url,
      json: true,
    };
    const response = await rp(options);
    return response.data;
  },
});

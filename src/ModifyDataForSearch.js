export default function modifyData(data) {
  let accumulatedData = {};
  data.forEach(item => {
    if (accumulatedData[item.channel]) {
      accumulatedData[item.channel].clicks += parseInt(item.clicks);
      accumulatedData[item.channel].impressions += parseInt(item.impressions);
    } else {
      accumulatedData[item.channel] = {
        clicks: parseInt(item.clicks),
        impressions: parseInt(item.impressions)
      };
    }
  });

  let preparedData = [];

  data.forEach(item => {
    preparedData.push({
      label: item.campaign,
      value: { clicks: item.clicks, impressions: item.impressions }
    });
  });

  Object.keys(accumulatedData).forEach(key => {
    preparedData.push({
      label: key,
      value: {
        clicks: accumulatedData[key].clicks,
        impressions: accumulatedData[key].impressions
      }
    });
  });

  return preparedData;
}

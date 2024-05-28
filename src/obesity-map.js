const adultObesityMap = (bmi) => {
  switch (true) {
    case bmi < 16:
      return {
        evaluation: "痩せすぎ",
        comment:
          "あなたの体重は非常に軽いです。十分な栄養摂取を心がけ、必要であれば医療専門家に相談してください。",
      };
    case bmi < 17:
      return {
        evaluation: "痩せ",
        comment:
          "あなたの体重は少し軽めです。バランスの取れた食事を意識し、必要であれば専門家に相談してください。",
      };
    case bmi < 18.5:
      return {
        evaluation: "痩せぎみ",
        comment:
          "あなたの体重はやや軽めの範囲です。適度な運動と栄養バランスを考慮に入れた食事を心がけましょう。",
      };
    case bmi < 25:
      return {
        evaluation: "普通体重",
        comment:
          "あなたの体重は理想的な範囲です。現在の生活習慣を維持し、定期的に健康状態をチェックしましょう。",
      };
    case bmi < 30:
      return {
        evaluation: "前肥満",
        comment:
          "あなたの体重は少し重めです。適度な運動とバランスの取れた食事を心がけて、理想的な体重を目指しましょう。",
      };
    case bmi < 35:
      return {
        evaluation: "肥満(1度)",
        comment:
          "あなたの体重は肥満の範囲に入ります（1度）。健康を維持するためには、医療専門家と共に適切なダイエット計画を立てることを検討します。",
      };
    case bmi < 40:
      return {
        evaluation: "肥満(2度)",
        comment:
          "あなたの体重は肥満の範囲に入ります（2度）。具体的な健康リスクが高まりますので、すぐに医療専門家に相談してください。",
      };
    case bmi >= 40:
      return {
        evaluation: "肥満(3度)",
        comment:
          "あなたの体重は高度な肥満の範囲に入ります（3度）。これは深刻な健康問題を引き起こす可能性があります。すぐに医療専門家に相談して健康管理の計画を立ててください。",
      };
  }
};
const childObesityMap = (obesity) => {
  switch (true) {
    case obesity <= -30:
      return {
        evaluation: "痩せすぎ",
        comment:
          "あなたの体重は、平均と比べて非常に低いです。栄養バランスのとれた食事と健康的なライフスタイルを心がけましょう。必要であれば、保護者や栄養士、医療専門家と相談をすることを検討してください。",
      };
    case obesity <= -20:
      return {
        evaluation: "痩せ",
        comment:
          "あなたの体重は、平均と比べて少し低めです。バランスの取れた食事習慣を心がけ、適度な運動を行うようにしましょう。必要であれば、保護者や栄養士、医療専門家に相談してください。",
      };
    case obesity < 20:
      return {
        evaluation: "普通体重",
        comment:
          "あなたの体重は、平均範囲にあります。これからも健康的な生活習慣を続け、定期的に健康チェックを行いましょう。",
      };
    case obesity < 30:
      return {
        evaluation: "肥満(1度)",
        comment:
          "あなたの体重は、平均と比べて少し高めです。栄養バランスの良い食事と適度な運動を続けることで、健康的な体重を維持しましょう。",
      };
    case obesity < 50:
      return {
        evaluation: "肥満(2度)",
        comment:
          "あなたの体重は、平均と比べてかなり高めです。専門家の助けを借りて、体重管理の計画を立てることを検討しましょう。",
      };
    case obesity >= 50:
      return {
        evaluation: "肥満(3度)",
        comment:
          "あなたの体重は、平均と比べて非常に高いです。早急に医療専門家の助けを得て、健康状態の改善策を検討してください。",
      };
  }
};

export { adultObesityMap, childObesityMap };

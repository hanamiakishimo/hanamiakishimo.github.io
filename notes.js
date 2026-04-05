const footerText = document.getElementById('today-text');

if (footerText) {
  const texts = [
    '今天也先堆着。',
    '先有目录，再长内容。',
    '这里不是完整博客，只是文字入口。',
    '先别装成熟，先能放东西。'
  ];

  const dayIndex = new Date().getDate() % texts.length;
  footerText.textContent = texts[dayIndex];
}

(async () => {
  try {
    const res = await fetch('https://api.quantumitinnovation.com/api/blogs/blog?resultPerPage=40&currentPage=1');
    const data = await res.json();
    if (data.success && data.blogs) {
      data.blogs.forEach((b) => {
        const matches = b.description.match(/<img[^>]+>/g);
        if (matches) {
          console.log(`\n=== BLOG: ${b.title} ===`);
          matches.forEach(img => {
            const idx = b.description.indexOf(img);
            const before = b.description.slice(Math.max(0, idx - 150), idx);
            const after = b.description.slice(idx + img.length, idx + img.length + 150);
            console.log(`IMAGE: ${img}`);
            console.log(`BEFORE: ${before}`);
            console.log(`AFTER: ${after}`);
            console.log('--------------------------------------------------');
          });
        }
      });
    }
  } catch (e) {
    console.error(e);
  }
})();

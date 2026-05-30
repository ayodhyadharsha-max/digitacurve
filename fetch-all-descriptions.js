(async () => {
  try {
    const res = await fetch('https://api.quantumitinnovation.com/api/blogs/blog?resultPerPage=40&currentPage=1');
    const data = await res.json();
    if (data.success && data.blogs) {
      data.blogs.forEach((b, idx) => {
        console.log(`\n=== BLOG ${idx}: ${b.title} (custom_url: ${b.custom_url}) ===`);
        // Find img tags and some surrounding text
        const matches = b.description.match(/<img[^>]+>/g);
        if (matches) {
          console.log(`Found ${matches.length} images:`);
          matches.forEach(m => console.log('  ', m));
        } else {
          console.log('No inline images found.');
        }
      });
    }
  } catch (e) {
    console.error(e);
  }
})();

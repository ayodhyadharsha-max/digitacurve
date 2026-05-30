fetch('https://api.quantumitinnovation.com/api/blogs/blog?resultPerPage=1&currentPage=1')
  .then(res => res.json())
  .then(data => {
    console.log(JSON.stringify(data.blogs[0], null, 2));
  })
  .catch(err => console.error(err));

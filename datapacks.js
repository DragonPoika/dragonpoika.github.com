// Make a GET request to the API endpoint
fetch('https://api.smithed.dev/v2/packs/sforms/meta')
  .then(response => response.json())
  .then(data => {
    // Access the total downloads from the fetched data
    const totalDownloads = data.stats.downloads.total;

    // Display the total downloads on your website
    const downloadsElement = document.getElementById('downloads'); // Replace 'downloads' with the ID of the element where you want to display the information
    downloadsElement.textContent = `Total Downloads: ${totalDownloads}`;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

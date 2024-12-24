// Smooth scroll to products section
document.querySelector(".hero button").addEventListener("click", function() 
{
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

// Add-to-cart functionality
const addToCartButtons = document.querySelectorAll(".product-card button");

addToCartButtons.forEach(button => // For each button in the array
{
    button.addEventListener("click", () => 
    {
        alert("Item added to cart!");
    });
});

document.addEventListener("DOMContentLoaded", () => 
{
    // Apply the fade-in class to body as soon as the DOM loads
    document.body.classList.add("fade-in");
});
document.addEventListener("DOMContentLoaded", () => {
    // 1. Fade in on page load
    document.body.classList.add("fade-in");
  
    // 2. Intercept all internal link clicks
    document.querySelectorAll("a").forEach(link => {
      // Only intercept links on the SAME domain
      if (link.hostname === window.location.hostname) {
        link.addEventListener("click", e => {
          e.preventDefault(); // Stop the browser from instantly following the link
          const href = link.href;
  
          // Remove fade-in, add fade-out
          document.body.classList.remove("fade-in");
          document.body.classList.add("fade-out");
  
          // After the fade-out animation finishes, navigate
          setTimeout(() => {
            window.location = href;
          }, 500); // match the .fade-out animation duration
        });
      }
    });
  });
  
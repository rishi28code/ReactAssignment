import React, { useState } from "react";
import PackageCard from "../components/PackageCard";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [savedPackages, setSavedPackages] = useState([]); // State for saved packages
  const [selectedPackage, setSelectedPackage] = useState(null); // State for selected package

  const packages = [
    {
      title: "Munnar Thekkady Alleppey and Kovalam tour",
      duration: "6 Days | 5 Nights",
      price: "₹25,800",
      pickup: "Cochin Airport / Railway Station",
      image: "https://images.unsplash.com/photo-1510662145379-13537db782dc?auto=format%2Ccompress&fm=webp&fit=crop&crop=faces%2Cedges&w=1200&h=675&q=60&cs=tinysrgb"
    },
    {
      title: "Discover Kashmir & Ladak",
      duration: "4 Days | 3 Nights",
      price: "₹25,800",
      pickup: "Srinagar Airport",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTnmr8kLeVTKr4dz9133TaL7dq_xaRrxyhbQ&s"
    },
    {
      title: "Cochin Munnar Thekkady and Cherrai tour",
      duration: "3 Days | 2 Nights",
      price: "₹25,800",
      pickup: "Cochin Airport",
      image: "https://c8.alamy.com/comp/2K2CK01/the-concept-of-a-seaside-holiday-at-a-resort-a-view-from-the-shore-of-random-people-swimming-in-the-sea-2K2CK01.jpg"
    },
    {
      title: "Goa Beach & Adventure Tour",
      duration: "5 Days | 4 Nights",
      price: "₹30,000",
      pickup: "Goa International Airport",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREyqt3qkWAr1VcSlAFszCJ9mH4UDiUUh8Q_A&s"
    },
    {
      title: "Rajasthan Heritage and Culture Tour",
      duration: "7 Days | 6 Nights",
      price: "₹45,000",
      pickup: "Jaipur International Airport",
      image: "https://www.shutterstock.com/image-photo/random-holiday-pictures-260nw-1277293132.jpg"
    },
    {
      title: "Himachal Pradesh Hill Station Tour",
      duration: "8 Days | 7 Nights",
      price: "₹50,000",
      pickup: "Kangra Airport",
      image: "https://images.unsplash.com/photo-1510662145379-13537db782dc?auto=format%2Ccompress&fm=webp&fit=crop&crop=faces%2Cedges&w=1200&h=675&q=60&cs=tinysrgb"
    }
  ];

  // Filter packages based on search term
  const filteredPackages = packages.filter(pkg =>
    pkg.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSave = (title) => {
    setSavedPackages(prev => {
      if (prev.includes(title)) {
        return prev.filter(pkg => pkg !== title); // Remove if already saved
      } else {
        return [...prev, title]; // Add to saved
      }
    });
  };

  const handleCardClick = (pkg) => {
    setSelectedPackage(pkg); // Set the selected package details
  };

  return (
    <div className="container mt-5">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search packages..."
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Display selected package details */}
      {selectedPackage && (
  <div className="mb-4">
    <span style={{ marginRight: '160px', backgroundColor: '#f0f0f0', padding: '2px', borderRadius: '5px' }}>
      {selectedPackage.title}
    </span>
    <span style={{ marginRight: '160px', backgroundColor: '#f0f0f0', padding: '2px', borderRadius: '5px' }}>
      {selectedPackage.duration}
    </span>
    <span style={{ marginRight: '160px', backgroundColor: '#f0f0f0', padding: '2px', borderRadius: '5px' }}>
      {selectedPackage.price}
    </span>
    <button onClick={() => setSelectedPackage(null)}>Update Search</button>
  </div>
)}




      {/* Display filtered packages */}
      <div className="row">
        {filteredPackages.length > 0 ? (
          filteredPackages.map((pkg, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <PackageCard 
                package={pkg} 
                onSave={() => handleSave(pkg.title)} 
                saved={savedPackages.includes(pkg.title)} // Check if the package is saved
                onClick={() => handleCardClick(pkg)} // Handle card click to display details
              />
            </div>
          ))
        ) : (
          <p className="text-center">No packages found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;



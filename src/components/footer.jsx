const FooterComponent = () => {
    return (
      <footer className="bg-white text-gray-600 py-10 border-t">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div>
            <h2 className="text-[#50A3B1] text-[76px] font-cabinet font-[700]">LOGO</h2>
            <p className="mt-2 text-[#475569] text-[18px] font-cabinet font-[400]">
              Experience The Convenience Of Recovery Delivered, Your Trusted Source For Online Medication Delivery. We Bring The Pharmacy To Your Doorstep, Ensuring Fast, Discreet, And Reliable Service. Whether You're Managing A Chronic Condition Or Need A One-Time Prescription Filled, We Make The Process Simple And Hassle-Free.
            </p>
          </div>
          
          {/* Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-[#49C7AB] text-[24px] font[400] font-cabinet mb-2">Quick Links</h3>
              <ul className="space-y-5 text-[18px] text-[#475569] font[400] font-cabinet">
                <li><a href="#" className="hover:text-[#49C7AB]">Home</a></li>
                <li><a href="#" className="hover:text-[#49C7AB]">About Us</a></li>
                <li><a href="#" className="hover:text-[#49C7AB]">Owners</a></li>
                <li><a href="#" className="hover:text-[#49C7AB]">Tenants</a></li>
                <li><a href="#" className="hover:text-[#49C7AB]">Properties</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#49C7AB] text-[24px] font[400] font-cabinet mb-2">Other Links</h3>
              <ul className="space-y-5 text-[18px] text-[#475569] font[400] font-cabinet">
                <li><a href="#" className="hover:text-teal-600">Online Medications</a></li>
                <li><a href="#" className="hover:text-teal-600">Download App</a></li>
                <li><a href="#" className="hover:text-teal-600">Start Treatment</a></li>
                <li><a href="#" className="hover:text-teal-600">Online Urgent Care</a></li>
                <li><a href="#" className="hover:text-teal-600">FAQ</a></li>
              </ul>
            </div>
          </div>
  
          {/* Contact & Social Media */}
          <div>
            <h3 className="text-[#49C7AB] text-[24px] font[400] font-cabinet mb-2">Contact</h3>
            <p className="text-[18px] text-[#475569] font[400] font-cabinet">📞 1-866-757-9868</p>
            
            <h3 className="text-[#49C7AB] text-[24px] font[400] font-cabinet mt-4 mb-2">Social Media</h3>
            <div className="flex space-x-3">
              <a href="#" className="text-[#475569] hover:text-teal-600"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-[#475569] hover:text-teal-600"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-[#475569] hover:text-teal-600"><i className="fab fa-youtube"></i></a>
            </div>
            <p className="text-[#475569] text-[14px] font[400] font-cabinet mt-10"> Designed And Developed By Ropstam </p>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="container mx-auto text-[14px] text-[#475569] font-[400] font-cabinet mt-8 border-t pt-4">
          &copy; 2024 – recovery Delivered | All Right Reserved
        </div>
      </footer>
    );
  };
  
  export default FooterComponent;
  
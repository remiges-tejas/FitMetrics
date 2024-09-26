function Footer() {
    return (
      <footer className="bg-teal-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Fit Metrics .All Rights Reserved.   | To better View : Use Desktop View Only</p>
          <p className="mt-2">Project  ❤️ By <a href="https://github.com/Tejasbisen786" className="text-coral"> bisen_tejas</a> </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
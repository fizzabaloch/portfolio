const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="font-heading text-lg font-bold text-gradient">​ </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Fizza Baloch. All rights reserved.
        </p>
      </div>
    </footer>);

};

export default Footer;
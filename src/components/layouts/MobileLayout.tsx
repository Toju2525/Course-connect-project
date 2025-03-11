
import { ReactNode } from "react";
import MobileHeader from "../mobile/MobileHeader";
import BottomNavigation from "../mobile/BottomNavigation";

interface MobileLayoutProps {
  children: ReactNode;
  title?: string;
  showBackButton?: boolean;
}

const MobileLayout = ({ children, title, showBackButton = false }: MobileLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <MobileHeader title={title} showBackButton={showBackButton} />
      <main className={`flex-1 ${showBackButton ? 'pt-16' : 'pt-32'} pb-16 px-4 overflow-y-auto`}>
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};

export default MobileLayout;

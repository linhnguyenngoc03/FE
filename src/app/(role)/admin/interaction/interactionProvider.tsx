"use client";
import { AppProvider } from "@/contexts/AppContext";
import { AuthProvider } from "@/contexts/JWTContext";
import AuthGuard from "@/guards/AuthGuard";
import RoleBasedGuard from "@/guards/RoleBasedGuard";
import { Role } from "@/enums/accountRole";
import Interaction from "./interaction";

const InteractionProvider: React.FC = () => {
  return (
    <AppProvider>
      <AuthProvider>
        <AuthGuard>
          <RoleBasedGuard accessibleRoles={[Role.ADMIN]}>
            <Interaction />
          </RoleBasedGuard>
        </AuthGuard>
      </AuthProvider>
    </AppProvider>
  );
};

export default InteractionProvider;

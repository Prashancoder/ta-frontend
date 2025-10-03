import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="container mx-auto max-w-3xl py-10 px-4">
      <h1 className="text-2xl font-semibold mb-6">My Profile</h1>
      <div className="grid gap-6">
        <div className="rounded-lg border p-4">
          <div className="grid gap-2">
            <div><span className="text-sm text-muted-foreground">Full Name</span><div className="font-medium">{user.name}</div></div>
            <div><span className="text-sm text-muted-foreground">Email</span><div className="font-medium">{user.email}</div></div>
          </div>
        </div>
        <div className="flex gap-3">
          <Link to="/orders"><Button variant="secondary">My Orders</Button></Link>
          <Link to="/account/change-password"><Button>Change Password</Button></Link>
          <Link to="/cart"><Button variant="outline">Go to Cart</Button></Link>
        </div>
      </div>
    </div>
  );
}



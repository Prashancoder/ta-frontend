import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ChangePasswordPage() {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: hook to backend endpoint when available
    alert("Password change submitted (wire backend later)");
  };

  return (
    <div className="container mx-auto max-w-md py-10 px-4">
      <h1 className="text-2xl font-semibold mb-6">Change Password</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label htmlFor="current">Current Password</Label>
          <Input id="current" type="password" value={current} onChange={(e) => setCurrent(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="next">New Password</Label>
          <Input id="next" type="password" value={next} onChange={(e) => setNext(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="confirm">Confirm New Password</Label>
          <Input id="confirm" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
        </div>
        <Button type="submit" className="w-full">Update Password</Button>
      </form>
    </div>
  );
}



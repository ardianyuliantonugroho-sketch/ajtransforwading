import {
  Plane,
  Ship,
  Truck,
  Warehouse,
  Settings,
  Clock,
  Users,
  Wallet,
  PhoneCall,
  MessageCircle,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  Globe,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  plane: Plane,
  ship: Ship,
  truck: Truck,
  warehouse: Warehouse,
  settings: Settings,
  clock: Clock,
  users: Users,
  wallet: Wallet,
  "phone-call": PhoneCall,
  "message-circle": MessageCircle,
  mail: Mail,
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
  globe: Globe,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = iconMap[name];
  if (!Cmp) return null;
  return <Cmp className={className} strokeWidth={1.75} />;
}

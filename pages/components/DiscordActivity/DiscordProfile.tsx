import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { HiMoon } from "react-icons/hi";

export default function DiscordProfile({
  status,
  profileUrl,
}: {
  status: string;
  profileUrl: string;
}) {
  switch (status) {
    case "online":
      return <Profile color="green.500" profileUrl={profileUrl} />;
    case "dnd":
      return <Profile color="red.500" profileUrl={profileUrl} />;
    case "idle":
      return <ProfileSleep color="yellow" profileUrl={profileUrl} />;
    case "offline":
      return <Profile color="gray.500" profileUrl={profileUrl} />;
    default:
      return <Profile color="gray.500" profileUrl={profileUrl} />;
  }
}

function Profile({ color, profileUrl }: { color: string; profileUrl: string }) {
  return (
    <Avatar src={profileUrl} size="sm">
      <AvatarBadge boxSize="1.20em" bg={color} />
    </Avatar>
  );
}

function ProfileSleep({
  color,
  profileUrl,
}: {
  color: string;
  profileUrl: string;
}) {
  return (
    <Avatar src={profileUrl} size="sm">
      <AvatarBadge borderColor="transparent" boxSize="1.50em">
        <HiMoon size={20} color={color} />
      </AvatarBadge>
    </Avatar>
  );
}

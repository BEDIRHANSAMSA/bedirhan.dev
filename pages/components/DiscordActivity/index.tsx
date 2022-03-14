import type { AlertStatus } from "@chakra-ui/alert";
import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DiscordProfile from "./DiscordProfile";
import { motion, useAnimation } from "framer-motion";
import { waitForSocketConnection } from "../../../lib/socket";
import {
  DISCORD_GATEWAY_AUTH,
  DISCORD_GATEWAY_GUILD_GET_SPECIFIC_MEMBER,
  DISCORD_USER_AVATAR,
} from "../../../lib/discord";

type UserData = {
  status: string;
  profileUrl: string;
  activities: Array<{
    name: string;
    details: string;
  }>;
};

export default function DiscordActivity() {
  const [data, setData] = useState<UserData>({
    status: "offline",
    profileUrl: "",
    activities: [],
  });

  const [activity, setActivity] = useState<any>({});
  const [copyCount, setCopyCount] = useState(0);
  const toast = useToast();
  const controls = useAnimation();

  const copyOnClick = () => {
    navigator.clipboard.writeText("Bedirhaaan Skywalker#6987");

    const { message, status, duration } = getCopyMessage({ copyCount });

    if (status == "error") {
      controls.start("start");

      setTimeout(() => {
        controls.stop();
        controls.set("reset");
      }, 2000);

      setTimeout(() => {
        setCopyCount(0);
      }, 3000);
    }

    toast({
      title: "Copied!",
      description: message,
      status: status as AlertStatus,
      duration,
      isClosable: true,
    });

    setCopyCount(copyCount + 1);
  };

  useEffect(() => {
    getData((returnData: any) => {
      if (returnData) {
        setData(returnData);
      }
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivity(
        data.activities[Math.floor(Math.random() * data.activities.length)]
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <motion.div
      style={{
        ...getRandomTransformOrigin(),
      }}
      variants={variants}
      animate={controls}
    >
      <Box>
        <Button
          p={0}
          background="transparent"
          _hover={{
            background: "transparent",
          }}
          _active={{
            background: "transparent",
          }}
          onClick={copyOnClick}
        >
          <Flex gap={2} alignItems="center">
            <DiscordProfile
              profileUrl={data?.profileUrl}
              status={data?.status}
            />
            {data?.status == "offline" ? (
              <>
                <Text>Offline</Text>
                <Text color="gray.500">{"-"}</Text>
                <Text color="gray.500">Discord</Text>
              </>
            ) : (
              <>
                {activity ? (
                  <>
                    <Text color="gray.500">
                      {activity.name == "Spotify" && "Listening"}
                      {activity.name == "Visual Studio Code" && "Coding"}
                      {activity.name != "Spotify" &&
                        activity.name != "Visual Studio Code" &&
                        "Playing"}
                    </Text>
                    <Text>{activity.name}</Text>
                    {activity.details && (
                      <>
                        <Text color="gray.500">{"-"}</Text>
                        <Text color="gray.500">{activity.details}</Text>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <Text>Idle</Text>
                  </>
                )}

                <Text color="gray.500">{"-"}</Text>
                <Text color="gray.500">Discord</Text>
              </>
            )}
          </Flex>
        </Button>
      </Box>
    </motion.div>
  );
}

function getCopyMessage({ copyCount }: { copyCount: number }) {
  let message = "Copied!";
  let duration = 1000;
  let status = "success";

  if (copyCount == 1) {
    message = "Double Copy!";
  }

  if (copyCount == 2) {
    message = "Triple Copy!";
  }

  if (copyCount == 3) {
    message = "Dominating!!";
  }

  if (copyCount == 4) {
    message = "Rampage!!";
  }

  if (copyCount == 5) {
    message = "Mega Copy!!";
  }

  if (copyCount == 6) {
    message = "Unstoppable!!";
  }

  if (copyCount == 7) {
    message = "Wicked Sick!!";
  }

  if (copyCount == 8) {
    message = "Monster Copy!!";
  }

  if (copyCount == 9) {
    message = "GODLIKE!";
    duration: 400;
    status = "error";
  }

  if (copyCount >= 10) {
    message = "BEYOND GODLIKE!!";
    duration = 400;
    status = "error";
  }

  return { message, duration, status };
}

function getData(callback: any = () => {}) {
  const handleMessage = (event: MessageEvent) => {
    const eventData = JSON.parse(event.data);

    if (eventData.t !== "GUILD_MEMBERS_CHUNK") {
      return;
    }

    if (eventData.d.presences.length > 0) {
      const filter = eventData.d.presences[0].activities.filter(
        (activity: any) => activity.name != "Custom Status"
      );

      callback({
        status: eventData.d.presences[0].status,
        profileUrl: DISCORD_USER_AVATAR + eventData.d.members[0].user.avatar,
        activities: filter,
      });
    } else {
      callback({
        status: "offline",
        profileUrl: DISCORD_USER_AVATAR + eventData.d.members[0].user.avatar,
        activities: [],
      });
    }
  };

  const ws = new WebSocket("wss://gateway.discord.gg?v=9&encoding=json");

  ws.onmessage = (event) => {
    handleMessage(event);
  };

  waitForSocketConnection(ws, function () {
    ws.send(JSON.stringify(DISCORD_GATEWAY_AUTH));
    ws.send(JSON.stringify(DISCORD_GATEWAY_GUILD_GET_SPECIFIC_MEMBER));
  });
}

const getRandomTransformOrigin = () => {
  const value = (14 + 40 * Math.random()) / 100;
  const value2 = (15 + 36 * Math.random()) / 100;
  return {
    originX: value,
    originY: value2,
  };
};

const getRandomDelay = () => -(Math.random() * 0.7 + 0.05);

const randomDuration = () => Math.random() * 0.07 + 0.23;

const variants = {
  start: (i: number) => ({
    rotate: i % 2 === 0 ? [-1, 1.3, 0] : [1, -1.4, 0],
    transition: {
      delay: getRandomDelay(),
      repeat: Infinity,
      duration: randomDuration(),
    },
  }),
  reset: {
    rotate: 0,
  },
};

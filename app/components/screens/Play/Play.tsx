"use client";
import {
  AIRPLANE_MAX_ANGLE,
  CURVE_AHEAD_AIRPLANE,
  CURVE_AHEAD_CAMERA,
  CURVE_DISTANCE,
  FRICTION_DISTANCE,
  LINE_NB_POINTS,
} from "@/config/constants";
import { useLanguage } from "@/hooks/useLanguage";
import { usePlay } from "@/providers/MainProvider";
import { fadeOnBeforeCompile } from "@/utils/fadeMaterial";
import { Float, PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { FC, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import {
  CatmullRomCurve3,
  Euler,
  Group,
  MathUtils,
  Quaternion,
  Shape,
  Vector3,
} from "three";
import { Airplane } from "./components/Play-Airplane";
import { Background } from "./components/Play-Background";
import { Balloon } from "./components/Play-Balloon";
import { Cloud } from "./components/Play-Clouds";
import { Speed } from "./components/Play-Speed";
import { TextSection } from "./components/Play-TextSection";
import { textSectionsData } from "./data";

export const Play: FC = () => {
  const { language }: any = useLanguage();
  const curvePoints = useMemo(
    () => [
      new Vector3(0, 0, 0),
      new Vector3(0, 0, -CURVE_DISTANCE),
      new Vector3(100, 0, -2 * CURVE_DISTANCE),
      new Vector3(-100, 0, -3 * CURVE_DISTANCE),
      new Vector3(100, 0, -4 * CURVE_DISTANCE),
      new Vector3(0, 0, -5 * CURVE_DISTANCE),
      new Vector3(0, 0, -6 * CURVE_DISTANCE),
      new Vector3(0, 0, -7 * CURVE_DISTANCE),
    ],
    []
  );

  const sceneOpacity = useRef<any>(0);
  const lineMaterialRef = useRef<any>();

  const curve = useMemo(() => {
    return new CatmullRomCurve3(curvePoints, false, "catmullrom", 0.5);
  }, []);

  const textSections = useMemo(() => {
    switch (language) {
      case "ua":
        return [
          {
            cameraRailDist: -1,
            position: new Vector3(
              curvePoints[1].x - 3,
              curvePoints[1].y,
              curvePoints[1].z
            ),
            subtitle: textSectionsData[0].text_ua,
          },
          {
            cameraRailDist: 1.5,
            position: new Vector3(
              curvePoints[2].x - 5,
              curvePoints[2].y,
              curvePoints[2].z - 20
            ),
            title: textSectionsData[1].title_ua,
            subtitle: textSectionsData[1].text_ua,
          },
          {
            cameraRailDist: -1.5,
            position: new Vector3(
              curvePoints[3].x - 5,
              curvePoints[3].y,
              curvePoints[3].z
            ),
            title: textSectionsData[2].title_ua,
            subtitle: textSectionsData[2].text_ua,
          },
          {
            cameraRailDist: 1.5,
            position: new Vector3(
              curvePoints[4].x + 2,
              curvePoints[4].y,
              curvePoints[4].z
            ),
            title: textSectionsData[3].title_ua,
            subtitle: textSectionsData[3].text_ua,
          },
          {
            cameraRailDist: 1.5,
            position: new Vector3(
              curvePoints[5].x + 2,
              curvePoints[5].y,
              curvePoints[5].z
            ),
            title: textSectionsData[4].title_ua,
            subtitle: textSectionsData[4].text_ua,
          },
          {
            cameraRailDist: 1.5,
            position: new Vector3(
              curvePoints[6].x + 2,
              curvePoints[6].y,
              curvePoints[6].z
            ),
            title: textSectionsData[5].title_ua,
            subtitle: textSectionsData[5].text_ua,
          },
        ];
        break;
      case "en":
        return [
          {
            cameraRailDist: -1,
            position: new Vector3(
              curvePoints[1].x - 3,
              curvePoints[1].y,
              curvePoints[1].z
            ),
            subtitle: textSectionsData[0].text_en,
          },
          {
            cameraRailDist: 1.5,
            position: new Vector3(
              curvePoints[2].x - 5,
              curvePoints[2].y,
              curvePoints[2].z - 20
            ),
            title: textSectionsData[1].title_en,
            subtitle: textSectionsData[1].text_en,
          },
          {
            cameraRailDist: -1.5,
            position: new Vector3(
              curvePoints[3].x - 5,
              curvePoints[3].y,
              curvePoints[3].z
            ),
            title: textSectionsData[2].title_en,
            subtitle: textSectionsData[2].text_en,
          },
          {
            cameraRailDist: 1.5,
            position: new Vector3(
              curvePoints[4].x + 2,
              curvePoints[4].y,
              curvePoints[4].z
            ),
            title: textSectionsData[3].title_en,
            subtitle: textSectionsData[3].text_en,
          },
          {
            cameraRailDist: 1.5,
            position: new Vector3(
              curvePoints[5].x + 2,
              curvePoints[5].y,
              curvePoints[5].z
            ),
            title: textSectionsData[4].title_en,
            subtitle: textSectionsData[4].text_en,
          },
          {
            cameraRailDist: 1.5,
            position: new Vector3(
              curvePoints[6].x + 2,
              curvePoints[6].y,
              curvePoints[6].z
            ),
            title: textSectionsData[5].title_en,
            subtitle: textSectionsData[5].text_en,
          },
        ];
        break;
      case "es":
        return [
          {
            cameraRailDist: -1,
            position: new Vector3(
              curvePoints[1].x - 3,
              curvePoints[1].y,
              curvePoints[1].z
            ),
            subtitle: textSectionsData[0].text_es,
          },
          {
            cameraRailDist: 1.5,
            position: new Vector3(
              curvePoints[2].x - 5,
              curvePoints[2].y,
              curvePoints[2].z - 20
            ),
            title: textSectionsData[1].title_es,
            subtitle: textSectionsData[1].text_es,
          },
          {
            cameraRailDist: -1.5,
            position: new Vector3(
              curvePoints[3].x - 5,
              curvePoints[3].y,
              curvePoints[3].z
            ),
            title: textSectionsData[2].title_es,
            subtitle: textSectionsData[2].text_es,
          },
          {
            cameraRailDist: 1.5,
            position: new Vector3(
              curvePoints[4].x + 2,
              curvePoints[4].y,
              curvePoints[4].z
            ),
            title: textSectionsData[3].title_es,
            subtitle: textSectionsData[3].text_es,
          },
          {
            cameraRailDist: 1.5,
            position: new Vector3(
              curvePoints[5].x + 2,
              curvePoints[5].y,
              curvePoints[5].z
            ),
            title: textSectionsData[4].title_es,
            subtitle: textSectionsData[4].text_es,
          },
          {
            cameraRailDist: 1.5,
            position: new Vector3(
              curvePoints[6].x + 2,
              curvePoints[6].y,
              curvePoints[6].z
            ),
            title: textSectionsData[5].title_es,
            subtitle: textSectionsData[5].text_es,
          },
        ];
        break;
    }
  }, [language]);

  const clouds = useMemo(
    () => [
      // STARTING
      {
        position: new Vector3(-3.5, -3.2, -7),
      },
      {
        position: new Vector3(3.5, -4, -10),
      },
      {
        scale: new Vector3(4, 4, 4),
        position: new Vector3(-18, 0.2, -68),
        rotation: new Euler(-Math.PI / 5, Math.PI / 6, 0),
      },
      {
        scale: new Vector3(2.5, 2.5, 2.5),
        position: new Vector3(10, -1.2, -52),
      },
      // FIRST POINT
      {
        scale: new Vector3(4, 4, 4),
        position: new Vector3(
          curvePoints[1].x + 10,
          curvePoints[1].y - 4,
          curvePoints[1].z + 64
        ),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[1].x - 20,
          curvePoints[1].y + 4,
          curvePoints[1].z + 28
        ),
        rotation: new Euler(0, Math.PI / 7, 0),
      },
      {
        rotation: new Euler(0, Math.PI / 7, Math.PI / 5),
        scale: new Vector3(5, 5, 5),
        position: new Vector3(
          curvePoints[1].x - 13,
          curvePoints[1].y + 4,
          curvePoints[1].z - 62
        ),
      },
      {
        rotation: new Euler(Math.PI / 2, Math.PI / 2, Math.PI / 3),
        scale: new Vector3(5, 5, 5),
        position: new Vector3(
          curvePoints[1].x + 54,
          curvePoints[1].y + 2,
          curvePoints[1].z - 82
        ),
      },
      {
        scale: new Vector3(5, 5, 5),
        position: new Vector3(
          curvePoints[1].x + 8,
          curvePoints[1].y - 14,
          curvePoints[1].z - 22
        ),
      },
      // SECOND POINT
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[2].x + 6,
          curvePoints[2].y - 7,
          curvePoints[2].z + 50
        ),
      },
      {
        scale: new Vector3(2, 2, 2),
        position: new Vector3(
          curvePoints[2].x - 2,
          curvePoints[2].y + 4,
          curvePoints[2].z - 26
        ),
      },
      {
        scale: new Vector3(4, 4, 4),
        position: new Vector3(
          curvePoints[2].x + 12,
          curvePoints[2].y + 1,
          curvePoints[2].z - 86
        ),
        rotation: new Euler(Math.PI / 4, 0, Math.PI / 3),
      },
      // THIRD POINT
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[3].x + 3,
          curvePoints[3].y - 10,
          curvePoints[3].z + 50
        ),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[3].x - 10,
          curvePoints[3].y,
          curvePoints[3].z + 30
        ),
        rotation: new Euler(Math.PI / 4, 0, Math.PI / 5),
      },
      {
        scale: new Vector3(4, 4, 4),
        position: new Vector3(
          curvePoints[3].x - 20,
          curvePoints[3].y - 5,
          curvePoints[3].z - 8
        ),
        rotation: new Euler(Math.PI, 0, Math.PI / 5),
      },
      {
        scale: new Vector3(5, 5, 5),
        position: new Vector3(
          curvePoints[3].x + 0,
          curvePoints[3].y - 5,
          curvePoints[3].z - 98
        ),
        rotation: new Euler(0, Math.PI / 3, 0),
      },
      // FOURTH POINT
      {
        scale: new Vector3(2, 2, 2),
        position: new Vector3(
          curvePoints[4].x + 3,
          curvePoints[4].y - 10,
          curvePoints[4].z + 2
        ),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[4].x + 4,
          curvePoints[4].y - 10,
          curvePoints[4].z - 42
        ),
        rotation: new Euler(Math.PI / 4, 0, Math.PI / 5),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[4].x - 4,
          curvePoints[4].y + 9,
          curvePoints[4].z - 62
        ),
        rotation: new Euler(Math.PI / 3, 0, Math.PI / 3),
      },
      // PRE-FINAL POINT
      {
        scale: new Vector3(2, 2, 2),
        position: new Vector3(
          curvePoints[5].x + 3,
          curvePoints[5].y - 10,
          curvePoints[5].z + 2
        ),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[5].x - 32,
          curvePoints[5].y - 10,
          curvePoints[5].z - 42
        ),
        rotation: new Euler(Math.PI / 4, 0, Math.PI / 5),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[5].x - 4,
          curvePoints[5].y + 9,
          curvePoints[5].z - 62
        ),
        rotation: new Euler(Math.PI / 3, 0, Math.PI / 3),
      },
      // FINAL
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[6].x + 12,
          curvePoints[6].y - 5,
          curvePoints[6].z + 60
        ),
        rotation: new Euler(-Math.PI / 4, -Math.PI / 6, 0),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[6].x - 12,
          curvePoints[6].y + 5,
          curvePoints[6].z + 120
        ),
        rotation: new Euler(Math.PI / 4, Math.PI / 6, 0),
      },
    ],
    []
  );

  const shape = useMemo(() => {
    const shape = new Shape();
    shape.moveTo(0, -0.08);
    shape.lineTo(0, 0.08);

    return shape;
  }, [curve]);

  const cameraGroup = useRef<any>();
  const cameraRail = useRef<any>();
  const camera = useRef<any>();
  const scroll = useScroll();
  const lastScroll = useRef<number>(0);

  const { play, setHasScroll, end, setEnd } = usePlay();

  useFrame((_state, delta) => {
    if (window.innerWidth > window.innerHeight) {
      // LANDSCAPE
      camera.current.fov = 30;
      camera.current.position.z = 5;
    } else {
      // PORTRAIT
      camera.current.fov = 80;
      camera.current.position.z = 2;
    }

    // if (lastScroll.current <= 0 && scroll.offset > 0) {
    //   setHasScroll(true);
    // }

    if (play && !end && sceneOpacity.current < 1) {
      sceneOpacity.current = MathUtils.lerp(
        sceneOpacity.current,
        1,
        delta * 0.1
      );
    }

    if (end && sceneOpacity.current > 0) {
      sceneOpacity.current = MathUtils.lerp(sceneOpacity.current, 0, delta);
    }

    lineMaterialRef.current.opacity = sceneOpacity.current;

    if (end) {
      return;
    }

    const scrollOffset = Math.max(0, scroll.offset);

    let friction = 1;
    let resetCameraRail = true;

    // LOOK TO CLOSE TEXT SECTIONS

    textSections?.forEach((textSection) => {
      const distance = textSection.position.distanceTo(
        cameraGroup.current.position
      );

      if (distance < FRICTION_DISTANCE) {
        friction = Math.max(distance / FRICTION_DISTANCE, 0.1);
        const targetCameraRailPosition = new Vector3(
          (1 - distance / FRICTION_DISTANCE) * textSection.cameraRailDist,
          0,
          0
        );
        cameraRail.current.position.lerp(targetCameraRailPosition, delta);
        resetCameraRail = false;
      }
    });
    if (resetCameraRail) {
      const targetCameraRailPosition = new Vector3(0, 0, 0);
      cameraRail.current.position.lerp(targetCameraRailPosition, delta);
    }

    // CALCULATE LERPED SCROLL OFFSET
    let lerpedScrollOffset = MathUtils.lerp(
      lastScroll.current,
      scrollOffset,
      delta * friction
    );
    // PROTECT BELOW 0 AND ABOVE 1
    lerpedScrollOffset = Math.min(lerpedScrollOffset, 1);
    lerpedScrollOffset = Math.max(lerpedScrollOffset, 0);

    lastScroll.current = lerpedScrollOffset;
    tl.current.seek(lerpedScrollOffset * tl.current.duration());

    const curPoint = curve.getPoint(lerpedScrollOffset);

    // Follow the curve points
    cameraGroup.current.position.lerp(curPoint, delta * 24);

    // Make the group look ahead on the curve

    const lookAtPoint = curve.getPoint(
      Math.min(lerpedScrollOffset + CURVE_AHEAD_CAMERA, 1)
    );

    const currentLookAt = cameraGroup.current.getWorldDirection(new Vector3());
    const targetLookAt = new Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();

    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );

    // Airplane rotation

    const tangent = curve.getTangent(lerpedScrollOffset + CURVE_AHEAD_AIRPLANE);

    const nonLerpLookAt = new Group();
    nonLerpLookAt.position.copy(curPoint);
    nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt));

    tangent.applyAxisAngle(new Vector3(0, 1, 0), -nonLerpLookAt.rotation.y);

    let angle = Math.atan2(-tangent.z, tangent.x);
    angle = -Math.PI / 2 + angle;

    let angleDegrees = (angle * 180) / Math.PI;
    angleDegrees *= 2.4; // stronger angle

    // LIMIT PLANE ANGLE
    if (angleDegrees < 0) {
      angleDegrees = Math.max(angleDegrees, -AIRPLANE_MAX_ANGLE);
    }
    if (angleDegrees > 0) {
      angleDegrees = Math.min(angleDegrees, AIRPLANE_MAX_ANGLE);
    }

    // SET BACK ANGLE
    angle = (angleDegrees * Math.PI) / 180;

    const targetAirplaneQuaternion = new Quaternion().setFromEuler(
      new Euler(airplane.current.rotation.x, airplane.current.rotation.y, angle)
    );
    airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);

    if (
      cameraGroup.current.position.z <
      curvePoints[curvePoints.length - 1].z + 100
    ) {
      setEnd(true);
      planeOutTl.current.play();
    }
  });

  const airplane = useRef<any>();

  const tl = useRef<any>();
  const backgroundColors = useRef({
    colorA: "#3535cc",
    colorB: "#6C69FF",
  });

  const planeInTl = useRef<any>();
  const planeOutTl = useRef<any>();

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#C8A6FF",
      colorB: "#6100FF",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#3A42FF",
      colorB: "#FFCC00",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#BD3131",
      colorB: "#141716",
    });

    tl.current.pause();

    planeInTl.current = gsap.timeline();
    planeInTl.current.pause();
    planeInTl.current.from(airplane.current.position, {
      duration: 3,
      z: 5,
      y: -2,
    });

    planeOutTl.current = gsap.timeline();
    planeOutTl.current.pause();

    planeOutTl.current.to(
      airplane.current.position,
      {
        duration: 10,
        z: -250,
        y: 10,
      },
      0
    );
    planeOutTl.current.to(
      cameraRail.current.position,
      {
        duration: 8,
        y: 12,
      },
      0
    );
    planeOutTl.current.to(airplane.current.position, {
      duration: 1,
      z: -1000,
    });
  }, []);

  useEffect(() => {
    if (play) {
      planeInTl.current.play();
    }
  }, [play]);

  useEffect(() => {
    useLanguage.persist.rehydrate();
  }, []);

  return (
    <>
      <directionalLight position={[0, 3, 1]} intensity={0.1} />
      <group ref={cameraGroup}>
        <Speed />
        <Background backgroundColors={backgroundColors} />
        <group ref={cameraRail}>
          <PerspectiveCamera
            ref={camera}
            position={[0, 0, 5]}
            fov={30}
            makeDefault
          />
        </group>
        <group ref={airplane}>
          <Float floatIntensity={1} speed={1.5} rotationIntensity={0.5}>
            <Airplane
              rotation-y={Math.PI / 2}
              scale={[0.2, 0.2, 0.2]}
              position-y={0.1}
            />
          </Float>
        </group>
      </group>
      {/* TEXT */}
      {textSections?.map((textSection, index) => (
        <TextSection {...textSection} key={index} />
      ))}

      {/* LINE */}
      <group position-y={-2}>
        <mesh>
          <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_NB_POINTS,
                bevelEnabled: false,
                extrudePath: curve,
              },
            ]}
          />
          <meshStandardMaterial
            color={"white"}
            ref={lineMaterialRef}
            transparent
            envMapIntensity={2}
            onBeforeCompile={fadeOnBeforeCompile}
          />
        </mesh>
      </group>

      <Float rotationIntensity={0.2} speed={0.5} floatIntensity={0.2}>
        <Balloon
          position={[
            curvePoints[5].x - 24,
            curvePoints[5].y,
            curvePoints[5].z - 42,
          ]}
          scale={2}
          opacity={0.7}
        />
      </Float>
      {/* CLOUDS */}
      {clouds.map((cloud, index) => (
        <Cloud
          sceneOpacity={sceneOpacity}
          variant={Math.floor(Math.random() * (2 - 1 + 1) + 1)}
          {...cloud}
          key={index}
        />
      ))}
    </>
  );
};

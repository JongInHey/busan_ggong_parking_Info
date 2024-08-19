import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

export const DetailInfo = ({ detailData }) => {
  return (
    <>
      <Center>
        <Heading fontSize="16px" fontWeight="semibold">
          주차 정보
        </Heading>
      </Center>
      <Center>
        <Text>
          주차구획수 : {detailData.pkCnt}대 / {detailData.pkGubun} /{" "}
          {detailData.pkFm}
        </Text>
      </Center>
      <Box
        w="90px"
        mt={5}
        p={2}
        textAlign="center"
        borderRadius="20px"
        bgColor="#ffa885"
        fontSize="18px"
        fontWeight="bold"
        border="1px solid #ffa222"
      >
        요금정보
      </Box>
      {/* 요금 */}
      <Flex alignItems="center" justifyContent="space-between" mt={4}>
        <Text fontSize="15px" fontWeight="medium">
          기본 {detailData.pkBascTime}분
        </Text>
        <Text fontSize="15px" fontWeight="medium">
          {detailData.tenMin !== "-" ? (
            <>{detailData.tenMin}원</>
          ) : (
            <> {detailData.tenMin}</>
          )}
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mt={4}>
        <Text fontSize="15px" fontWeight="medium">
          추가 {detailData.pkAddTime}분 당
        </Text>
        <Text fontSize="15px" fontWeight="medium">
          {detailData.feeAdd !== "-" ? (
            <>{detailData.feeAdd}원</>
          ) : (
            <> {detailData.feeAdd}</>
          )}
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mt={4}>
        <Text fontSize="15px" fontWeight="medium">
          1일 주차권
        </Text>
        <Text fontSize="15px" fontWeight="medium">
          {detailData.ftDay !== "-" ? (
            <>{detailData.ftDay}원</>
          ) : (
            <> {detailData.ftDay}</>
          )}
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mt={4}>
        <Text fontSize="15px" fontWeight="medium">
          월 정기 주차권
        </Text>
        <Text fontSize="15px" fontWeight="medium">
          {detailData.ftMon !== "-" ? (
            <>{detailData.ftMon}원</>
          ) : (
            <> {detailData.ftMon}</>
          )}
        </Text>
      </Flex>

      <Box
        w="90px"
        mt={5}
        p={2}
        textAlign="center"
        borderRadius="20px"
        bgColor="#ffa885"
        fontSize="18px"
        fontWeight="bold"
        border="1px solid #ffa222"
      >
        운영시간
      </Box>
      {/* 운영시간 */}
      <Flex alignItems="center" justifyContent="space-between" mt={4}>
        <Text fontSize="15px" fontWeight="medium">
          평일
        </Text>
        <Text fontSize="15px" fontWeight="medium">
          {detailData.svcSrtTe !== "-" ? (
            <>
              {detailData.svcSrtTe} ~ {detailData.svcEndTe}
            </>
          ) : (
            <>-</>
          )}
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mt={4}>
        <Text fontSize="15px" fontWeight="medium">
          토요일
        </Text>
        <Text fontSize="15px" fontWeight="medium">
          {detailData.satSrtTe !== "-" ? (
            <>
              {detailData.satSrtTe} ~ {detailData.satEndTe}
            </>
          ) : (
            <>-</>
          )}
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mt={4}>
        <Text fontSize="15px" fontWeight="medium">
          일, 공휴일
        </Text>
        <Text fontSize="15px" fontWeight="medium">
          {detailData.hldSrtTe !== "-" ? (
            <>
              {detailData.hldSrtTe} ~ {detailData.hldEndTe}
            </>
          ) : (
            <>-</>
          )}
        </Text>
      </Flex>

      {/* 전화번호 */}
      {detailData.tponNum !== "-" && (
        <Flex alignItems="center" justifyContent="space-between" mt={4}>
          <Text fontSize="15px" fontWeight="medium">
            전화번호
          </Text>
          <Text fontSize="15px" fontWeight="medium">
            {detailData.tponNum}
          </Text>
        </Flex>
      )}
    </>
  );
};

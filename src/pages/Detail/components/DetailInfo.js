import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

export const DetailInfo = ({ detailData }) => {
  return (
    <>
      <Box
        w="100%"
        borderRadius="20px"
        p={5}
        mt={5}
        lineHeight="23px"
        bgColor={"#f9f9f9"}
      >
        <Center>
          <Heading fontSize="28px" fontWeight="semibold" mb={3}>
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
          bgColor="#ffa825"
          fontSize="18px"
          fontWeight="bold"
          border="1px solid #ffa222"
          color="#fff"
          fontFamily="Noto Sans KR, sans-serif"
        >
          요금정보
        </Box>
        {/* 요금 */}
        <Flex alignItems="center" justifyContent="space-between" mt={4}>
          <Text fontSize="15px" fontWeight="medium" opacity="0.7">
            기본 {detailData.pkBascTime}분
          </Text>
          <Text fontSize="15px" fontWeight="bold" color="#1d1d1d">
            {detailData.tenMin !== "-" ? (
              <>{detailData.tenMin}원</>
            ) : (
              <> {detailData.tenMin}</>
            )}
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" mt={4}>
          <Text fontSize="15px" fontWeight="medium" opacity="0.7">
            추가 {detailData.pkAddTime}분 당
          </Text>
          <Text fontSize="15px" fontWeight="bold" color="#1d1d1d">
            {detailData.feeAdd !== "-" ? (
              <>{detailData.feeAdd}원</>
            ) : (
              <> {detailData.feeAdd}</>
            )}
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" mt={4}>
          <Text fontSize="15px" fontWeight="medium" opacity="0.7">
            1일 주차권
          </Text>
          <Text fontSize="15px" fontWeight="bold" color="#1d1d1d">
            {detailData.ftDay !== "-" ? (
              <>{detailData.ftDay}원</>
            ) : (
              <> {detailData.ftDay}</>
            )}
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" mt={4}>
          <Text fontSize="15px" fontWeight="medium" opacity="0.7">
            월 정기 주차권
          </Text>
          <Text fontSize="15px" fontWeight="bold" color="#1d1d1d">
            {detailData.ftMon !== "-" ? (
              <>{detailData.ftMon}원</>
            ) : (
              <> {detailData.ftMon}</>
            )}
          </Text>
        </Flex>
      </Box>

      <Box
        w="100%"
        borderRadius="20px"
        p={5}
        pt={1}
        mt={5}
        lineHeight="23px"
        bgColor={"#f9f9f9"}
      >
        <Box
          w="90px"
          mt={5}
          p={2}
          textAlign="center"
          borderRadius="20px"
          bgColor="#ffa825"
          fontSize="18px"
          fontWeight="bold"
          border="1px solid #ffa222"
          color="#fff"
          fontFamily="Noto Sans KR, sans-serif"
        >
          운영시간
        </Box>
        {/* 운영시간 */}
        <Flex alignItems="center" justifyContent="space-between" mt={4}>
          <Text fontSize="15px" fontWeight="medium" opacity="0.7">
            평일
          </Text>
          <Text fontSize="15px" fontWeight="bold" color="#1d1d1d">
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
          <Text fontSize="15px" fontWeight="medium" opacity="0.7">
            토요일
          </Text>
          <Text fontSize="15px" fontWeight="bold" color="#1d1d1d">
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
          <Text fontSize="15px" fontWeight="medium" opacity="0.7">
            일, 공휴일
          </Text>
          <Text fontSize="15px" fontWeight="bold" color="#1d1d1d">
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
            <Text fontSize="15px" fontWeight="medium" opacity="0.7">
              전화번호
            </Text>
            <Text fontSize="15px" fontWeight="bold" color="#1d1d1d">
              {detailData.tponNum}
            </Text>
          </Flex>
        )}
      </Box>
    </>
  );
};

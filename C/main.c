#include <stdio.h>
#include <stdlib.h>

#define MAX_VIDEOS 30

// 시간 합산을 계산하는 함수
void addTime(int *totalHours, int *totalMinutes, int *totalSeconds, int hours, int minutes, int seconds) {
    *totalSeconds += seconds;
    *totalMinutes += *totalSeconds / 60;
    *totalSeconds %= 60;

    *totalMinutes += minutes;
    *totalHours += *totalMinutes / 60;
    *totalMinutes %= 60;

    *totalHours += hours;
}

int main() {
    int numVideos, hours, minutes, seconds;
    int totalHours = 0, totalMinutes = 0, totalSeconds = 0;
    int i; // for 루프에서 사용할 변수는 미리 선언

    printf("영상의 갯수를 입력하세요 (최소 2개, 최대 30개): ");
    scanf("%d", &numVideos);

    if (numVideos < 2 || numVideos > MAX_VIDEOS) {
        printf("영상의 갯수는 2개 이상 30개 이하로 입력해야 합니다.\n");
        return 1;
    }

    for (i = 0; i < numVideos; i++) {
        printf("영상 %d의 길이를 hh:mm:ss 형식으로 입력하세요: ", i + 1);
        scanf("%d:%d:%d", &hours, &minutes, &seconds);

        addTime(&totalHours, &totalMinutes, &totalSeconds, hours, minutes, seconds);
    }

    printf("총 영상 길이: %02d:%02d:%02d\n", totalHours, totalMinutes, totalSeconds);

    return 0;
}


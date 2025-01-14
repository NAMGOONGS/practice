#include <stdio.h>
#include <stdlib.h>

#define MAX_VIDEOS 30

// �ð� �ջ��� ����ϴ� �Լ�
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
    int i; // for �������� ����� ������ �̸� ����

    printf("������ ������ �Է��ϼ��� (�ּ� 2��, �ִ� 30��): ");
    scanf("%d", &numVideos);

    if (numVideos < 2 || numVideos > MAX_VIDEOS) {
        printf("������ ������ 2�� �̻� 30�� ���Ϸ� �Է��ؾ� �մϴ�.\n");
        return 1;
    }

    for (i = 0; i < numVideos; i++) {
        printf("���� %d�� ���̸� hh:mm:ss �������� �Է��ϼ���: ", i + 1);
        scanf("%d:%d:%d", &hours, &minutes, &seconds);

        addTime(&totalHours, &totalMinutes, &totalSeconds, hours, minutes, seconds);
    }

    printf("�� ���� ����: %02d:%02d:%02d\n", totalHours, totalMinutes, totalSeconds);

    return 0;
}


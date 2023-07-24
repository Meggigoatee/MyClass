package com.myclass.schedule.scheduleController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScheduleController {
	
	// 일정 페이지
	@GetMapping("/schedule")
	public String schedule() {
		return null;
		// 현재 월의 모든 일정을 불러와야 함
	}
	
	// 일정 
	
	// 일정 세부보기
	@GetMapping("/schedule/{schedule_id}")
	public String schedulespec(@PathVariable("schedule_id") String schedule_id) {
		return null;
	}

}

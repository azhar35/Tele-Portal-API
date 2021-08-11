package com.example.demo.data;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.beans.Device;

public interface DeviceRepository extends JpaRepository<Device, Integer> {

}

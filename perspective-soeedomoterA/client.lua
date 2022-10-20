Citizen.CreateThread(function()
	local isPlayerInVehicle = false
	while true do
		local Ped = GetPlayerPed(-1)
		if (IsPedInAnyVehicle(Ped)) then
			local PedCar = GetVehiclePedIsIn(Ped, false)
			VehicleCurrentSpeedLua = math.ceil(GetEntitySpeed(PedCar) * 3.6)
			VehicleCurrentGearLua = GetVehicleCurrentGear(PedCar)
			VehicleCurrentSteeringAngleLua = GetVehicleSteeringAngle(PedCar)
			VehicleCurrentSteeringAngleLuaInPercentageLua = 100 *  (VehicleCurrentSteeringAngleLua / 45)

			SendNUIMessage({
				VehicleCurrentSteeringAngleLuaInPercentage = VehicleCurrentSteeringAngleLuaInPercentageLua
			})


			if (isPlayerInVehicle == false) then
				SendNUIMessage({
					showSpeedoMoter = true
				})
				isPlayerInVehicle = true
				print(isPlayerInVehicle)
			end
			SendNUIMessage({
				VehicleCurrentSpeed = VehicleCurrentSpeedLua,
				VehicleCurrentGear = VehicleCurrentGearLua
			})
		else
			if (isPlayerInVehicle == true) then
				SendNUIMessage({
					showSpeedoMoter = false
				})
				isPlayerInVehicle = false
				print(isPlayerInVehicle)
			end
		end
		Citizen.Wait(50)
	end
end)